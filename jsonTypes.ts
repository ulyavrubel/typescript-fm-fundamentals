// @errors: 2578

type Primitive = string | boolean | number | null;

type JSONObject = { [k: string]: JSONValue };
type JSONArray = JSONValue[];
type JSONValue = Primitive | JSONArray | JSONObject;

////// DO NOT EDIT ANY CODE BELOW THIS LINE //////
function isJSON(arg: JSONValue) {}

// POSITIVE test cases (must pass)
isJSON('hello');
isJSON([4, 8, 15, 16, 23, 42]);
isJSON({ greeting: 'hello' });
isJSON(false);
isJSON(true);
isJSON(null);
isJSON({ a: { b: [2, 3, 'foo'] } });

// NEGATIVE test cases (must fail)
// @ts-expect-error
isJSON(() => '');
// @ts-expect-error
isJSON(class {});
// @ts-expect-error
isJSON(undefined);
// @ts-expect-error
isJSON(new BigInt(143));
// @ts-expect-error
isJSON(isJSON);
