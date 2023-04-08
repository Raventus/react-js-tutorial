// Задание первого уровня 2
// Есть объединение (юнион) типов заказов в различных состояниях
// Нужно заменить FIXME на тип который достанет из Order все возможные состояния (state)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type state1 = "initial";
type state2 = "inWork";
type state3 = "buyingSupplies";
type state4 = "producing";
type stete5 = "fullfilled";

type FIXME = Order["state"];
// state1 | state2 | state3 | state4| stete5;

/*enum States { 
  Initial = "initial", 
  InWork = "inWork",
  BuyingSupplies = "buyingSupplies", 
  Producing = "producing",
  Fullfilled = "fullfilled"
};*/

type Order =
  | {
      state: "initial";
      sum: number;
    }
  | {
      state: "inWork";
      sum: number;
      workerId: number;
    }
  | {
      state: "buyingSupplies";
      sum: number;
      workerId: number;
      suppliesSum: number;
    }
  | {
      state: "producing";
      sum: number;
      workerId: number;
      suppliesSum: number;
      produceEstimate: Date;
    }
  | {
      state: "fullfilled";
      sum: number;
      workerId: number;
      suppliesSum: number;
      produceEstimate: Date;
      fullfillmentDate: Date;
    };

export const getOrderState = (order: Order): FIXME => order.state;
