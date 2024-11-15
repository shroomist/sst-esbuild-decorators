
function decorator(value, context) {
  console.log('decorator call');
  console.log('value', value);
  console.log('context', context);
}

@decorator
export class C {
  @decorator // decorates a class field
  p = 5;

  @decorator // decorates a method
  m() { return this.p }

}
