import { Field, SmartContract, State, state, method } from 'o1js';

export class Counter extends SmartContract {
  @state(Field) value3 = State<Field>();

  init() {
    super.init();
    this.value3.set(Field(0));
  }

  @method increase_counter() {
    const value = this.value3.get();
    this.value3.requireEquals(value);
    const updated_value = value.add(1);
    this.value3.set(updated_value);
  }

  @method decrease_counter() {
    const value = this.value3.get();
    this.value3.assertEquals(this.value3.get());
    value.assertGreaterThan(Field(0));
    this.value3.set(value.sub(1));
  }
}
