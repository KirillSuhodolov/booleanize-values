# booleanize values

Package done only one thing - booleanize values in hash
Usefull for example for next.js dynamic or query params

```
import boolenizeValues from 'booleanize-values'

boolenizeValues({
  canDo: 'true',
  nested: {
    can: 'false'
  }
})

```

```
{ canDo: true, nested: { can: false } }
```
