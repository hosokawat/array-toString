array-toStringFix
==============

JavascriptのArray.toStringを読みやすくします。

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


