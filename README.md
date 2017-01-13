# react-native-tag-cloud
View for Tag cloud

### Introduction
This idea is simple. Each tags include title and point.  
In this version, It seems that tags are placed randomly but
there are some rules of placement.  
Some tags that have highest point are placed in middle of arrays thought ordering.  
For example, if your tag list is as follow,

```
[
  { title: 'Item1', point: 1 },
  { title: 'Item2', point: 2 },
  { title: 'Item3', point: 1 },
  { title: 'Item4', point: 0 },
  { title: 'Item5', point: 1 },
  { title: 'Item6', point: 1 },
  { title: 'Item7', point: 2 },
  { title: 'Item8', point: 0 },
  { title: 'Item9', point: 0 },
  { title: 'Item10', point: 1 },
]
```

the list will be ordered like this.

```
  [
    { title: 'Item8', point: 0 },
    { title: 'Item10', point: 1 },
    { title: 'Item5', point: 1 },
    { title: 'Item1', point: 1 },
    { title: 'Item2', point: 2 },
    { title: 'Item7', point: 2 },
    { title: 'Item3', point: 1 },
    { title: 'Item6', point: 1 },
    { title: 'Item4', point: 0 },
    { title: 'Item9', point: 0 },
  ]
```

**react-native-tag-cloud** needs to be enhanced. So any ideas are welcome!

### Usage
To use this, import the `TagCloud` object:
```
import { TagCloud } from 'react-native-tag-cloud';
```

Use `TagCloud` like this.
```
<TagCloud
  tagList={...}
  colorList={...}
  minFontSize={...}
  style={...}
/>
```

### Properties
1. **tagList** (Required)  
  The item of list must `have` title and `point`  
  `point` should be integer type(0 ~ N)  

2. **colorList** (Requried)  
  Each color value corresponds to `point` of `tag` object.

3. **minFontSize** (Optional)  
  This will decide the minimum font size of each tag.  
  Default size is 12.

4. **style** (Optional)  
  This style is for container.

5. **tagPaddingLeft, tagPaddingTop, tagPaddingRight, tagPaddingBottom** (Optional)  
  Default value is **30**.
