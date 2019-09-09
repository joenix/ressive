# Ressive

> An Ingenious Kit 4 Simple Project Build

## Get Start


### Require Package

``` javascript
const Ressive = require('ressive')
```

### How To Use Ressive
``` javascript
new Ressive(
	{
		key: 'lock'
	}
)
.next(

	class FirstRun
	{
		constructor ( data )
		{
			console.log( data ) // { key: 'lock' }

			return { A: '1st' }
		}
	},

	function ({ A })
	{
		console.log( A ) // 1st

		return { B: 'Ham' }
	},

	( data ) => {

		console.log( data ) // { key: 'lock', A: 'Example', B: 'Ham' }

	}

)
.next(

	class SecondRun
	{
		constructor ( data )
		{
			console.log( data ) // { key: 'lock' }

			return { C: '3th' }
		}
	},

	( data ) => {

		console.log( data ) // { key: 'lock', C: '3th' }

	}

)

```
