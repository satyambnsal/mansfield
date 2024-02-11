import { Field, SmartContract, State, state, method } from 'o1js';

export class Counter extends SmartContract {
  @state(Field) value1 = State<Field>();
  events = {
    'set-counter': Field,
    'update-counter': Field,
  };

  init() {
    super.init();
    this.value1.set(Field(0));
    this.emitEvent('set-counter', Field(0));
  }

  @method increase_counter() {
    const value = this.value1.get();
    this.value1.requireEquals(value);
    const updated_value = value.add(1);
    this.value1.set(updated_value);
    this.emitEvent('update-counter', updated_value);
  }

  @method decrease_counter() {
    const value = this.value1.get();
    this.value1.assertEquals(this.value1.get());
    value.assertGreaterThan(Field(0));
    this.value1.set(value.sub(1));
  }
}
