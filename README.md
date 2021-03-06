# 🦕 deno-module-boilerplate

[Deno](https://deno.land) module boilerplate repository.

## Usage

```typescript
import { getHelloWorld } from "https://raw.githubusercontent.com/ogwurujohnson/deno-module-boilerplateter/{VERSION}/mod.ts";

const helloWorld = getHelloWorld();
console.log(helloWorld); // Prints "Hello World" in bold
```

## Test

```bash
# unit tests
deno test ./test.ts
```

## Format code

```bash
deno fmt **/*.ts
```

## Resources

- [Deno Website](https://deno.land)
- [Deno Style Guide](https://deno.land/std/style_guide.md)
- [Deno Gitter](https://gitter.im/denolife/Lobby)