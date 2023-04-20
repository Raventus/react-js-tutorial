// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME = OrderStateWithoutProdAndByuing;

const orderStates = [
  "initial",
  "inWork",
  "buyingSupplies",
  "producing",
  "fullfilled",
] as const;

type OrderState = typeof orderStates[number];

type OrderStateWithoutProdAndByuing = Exclude<
  OrderState,
  "buyingSupplies" | "producing"
>;

// Hint: type guards
export const getUserOrderStates = (orderStates: OrderState[]): FIXME[] =>
  orderStates.filter(
    (state): state is FIXME =>
      state !== "buyingSupplies" && state !== "producing"
  );
