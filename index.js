import { is, concat, map, defaultTo, of, T, F, fromPairs, cond, identity, compose, toPairs } from 'ramda'

export const toBool =
when(
  is(String),
  (a) => propOr(a)(a)({ true: true, false: false})
)

const booleanizeValues = compose(
  fromPairs,
  map(([key, value]) => compose(
    concat([key]),
    of,
    cond([
      [is(Object), booleanizeValues],
      [is(String), toBool],
      [T, identity]
    ])
  )(value)),
  toPairs,
  defaultTo({}),
)

export default booleanizeValues