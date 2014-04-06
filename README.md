array-toStringFix
==============

JavascriptのArray.toStringを改善します

##[1,2,3].toString()

before

`'1,2,3'`

after

`[1,2,3]`

##[1,2,[3]].toString()

before

`'1,2,3'`

after

`'[1,2,[3]]'`

##[[1,2],[[3]],[[]]].toString()`

before

`'1,2,3,'`

after

`'[[1,2],[[3]],[[]]]'`


