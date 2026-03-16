
export type Team = 'team1' | 'team2';
export type CellState = 'empty' | 'team1' | 'team2';

export interface GameSettings {
  mode: 'presenter' | 'auto' | 'solo';
  timerSeconds: number;
  categories: string[];
  team1Name: string;
  team2Name: string;
  boardSize: number;
}

export interface HexCell {
  row: number;
  col: number;
  letter: string;
  state: CellState;
  isActive: boolean;
}

export interface GameState {
  board: HexCell[][];
  currentTeam: Team;
  team1Score: number;
  team2Score: number;
  selectedCell: { row: number; col: number } | null;
  phase: 'setup' | 'playing' | 'question' | 'answer-reveal' | 'finished';
  settings: GameSettings;
  round: number;
  totalRounds: number;
  winner: Team | 'draw' | null;
  usedQuestions: Set<string>;
}

export const DEFAULT_SETTINGS: GameSettings = {
  mode: 'auto',
  timerSeconds: 30,
  categories: ['name', 'animal', 'plant', 'object', 'country'],
  team1Name: 'الفريق الأخضر',
  team2Name: 'الفريق الأحمر',
  boardSize: 5,
};

export type GameAction =
  | { type: 'SELECT_CELL'; row: number; col: number }
  | { type: 'CORRECT_ANSWER'; team: Team }
  | { type: 'WRONG_ANSWER' }
  | { type: 'TIMEOUT' }
  | { type: 'NEXT_TURN' }
  | { type: 'RESET' }
  | { type: 'SET_PHASE'; phase: GameState['phase'] }
  | { type: 'START_GAME'; settings: GameSettings; board: HexCell[][] }
  | { type: 'SET_WINNER'; winner: Team | 'draw' };

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        board: action.board,
        settings: action.settings,
        phase: 'playing',
        currentTeam: 'team1',
        team1Score: 0,
        team2Score: 0,
        round: 1,
        winner: null,
        selectedCell: null,
        usedQuestions: new Set(),
      };

    case 'SELECT_CELL':
      return {
        ...state,
        selectedCell: { row: action.row, col: action.col },
        phase: 'question',
        board: state.board.map((row, ri) =>
          row.map((cell, ci) => ({
            ...cell,
            isActive: ri === action.row && ci === action.col,
          }))
        ),
      };

    case 'CORRECT_ANSWER': {
      const points = 10;
      const newBoard = state.board.map((row, ri) =>
        row.map((cell, ci) => {
          if (state.selectedCell && ri === state.selectedCell.row && ci === state.selectedCell.col) {
            return { ...cell, state: action.team as CellState, isActive: false };
          }
          return { ...cell, isActive: false };
        })
      );

      const newState = {
        ...state,
        board: newBoard,
        team1Score: action.team === 'team1' ? state.team1Score + points : state.team1Score,
        team2Score: action.team === 'team2' ? state.team2Score + points : state.team2Score,
        phase: 'answer-reveal' as const,
        selectedCell: null,
      };

      // Check if all cells are claimed
      const allClaimed = newBoard.every(row => row.every(cell => cell.state !== 'empty'));
      if (allClaimed) {
        const winner = newState.team1Score > newState.team2Score ? 'team1' 
          : newState.team2Score > newState.team1Score ? 'team2' : 'draw';
        return { ...newState, phase: 'finished', winner: winner as Team | 'draw' };
      }

      return newState;
    }

    case 'WRONG_ANSWER':
    case 'TIMEOUT':
      return {
        ...state,
        phase: 'answer-reveal',
        board: state.board.map(row =>
          row.map(cell => ({ ...cell, isActive: false }))
        ),
        selectedCell: null,
      };

    case 'NEXT_TURN':
      return {
        ...state,
        currentTeam: state.currentTeam === 'team1' ? 'team2' : 'team1',
        phase: 'playing',
        round: state.round + 1,
      };

    case 'SET_PHASE':
      return { ...state, phase: action.phase };

    case 'SET_WINNER':
      return { ...state, winner: action.winner, phase: 'finished' };

    case 'RESET':
      return {
        ...state,
        phase: 'setup',
        team1Score: 0,
        team2Score: 0,
        round: 1,
        winner: null,
        selectedCell: null,
        usedQuestions: new Set(),
      };

    default:
      return state;
  }
}

export function createBoard(letters: string[][], size: number): HexCell[][] {
  return letters.map((row, ri) =>
    row.map((letter, ci) => ({
      row: ri,
      col: ci,
      letter,
      state: 'empty' as CellState,
      isActive: false,
    }))
  );
}
