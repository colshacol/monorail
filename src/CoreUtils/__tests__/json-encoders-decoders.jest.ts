import * as t from 'io-ts'
import { Either, right } from 'fp-ts/lib/Either'
import { Option, some, none } from 'fp-ts/lib/Option'
import { createOptionFromJSON } from '@monorail/CoreUtils/json-encoders-decoders'

type RoundTripTest<A> = {
  result: Either<t.Errors, Option<A>>
  expected: Either<t.Errors, Option<A>>
}

const roundTrip = <A>(codec: t.Type<A>) => {
  const OptionFromJSON = createOptionFromJSON(codec)

  return (ma: Option<A>): RoundTripTest<A> => {
    const stringified = JSON.stringify(ma)
    const parsed = JSON.parse(stringified)
    const result = OptionFromJSON.decode(parsed)
    const expected = right<t.Errors, Option<A>>(ma)
    return { result, expected }
  }
}

const roundTripTest = roundTrip(t.number)

describe('createOptionFromJSON', () => {
  it('properly encodes and decodes Some', () => {
    const numOpt = some(1)
    const { result, expected } = roundTripTest(numOpt)
    expect(result).toEqual(expected)
  })
  it('properly encodes and decodes None', () => {
    const { result, expected } = roundTripTest(none)
    expect(result).toEqual(expected)
  })
})
