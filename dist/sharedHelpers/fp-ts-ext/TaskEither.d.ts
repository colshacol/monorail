import { Either } from 'fp-ts/lib/Either';
import { Lazy } from 'fp-ts/lib/function';
import { Task } from 'fp-ts/lib/Task';
import { TaskEither } from 'fp-ts/lib/TaskEither';
/**
 * TaskEither constructor function
 *
 */
export declare const newTaskEither: <L, A>(task: Task<Either<L, A>>) => TaskEither<L, A>;
/**
 * Run a TaskEither
 */
export declare const runTaskEither: <L, A>(x: TaskEither<L, A>) => Promise<Either<L, A>>;
/**
 * Returns the run function for a TaskEither<L, A>
 */
export declare const constRunTaskEither: <L, A>(x: TaskEither<L, A>) => Lazy<Promise<Either<L, A>>>;
