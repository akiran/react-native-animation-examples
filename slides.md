### Gestures

- Tap
- Swipe
- Scroll
- Pinch to zoom

---

###

- Gesture Responder System
- PanResponder

---

```
<View
  onStartShouldSetResponder={evt => true}
>
</View>
```

---

```
<View
  onStartShouldSetResponder={evt => true}
  onResponderGrant={evt => //logic}
>
</View>
```

---

```
<View
  onStartShouldSetResponder={evt => true}
  onResponderGrant={evt => //logic}
  onResponderRelease={evt => // logic}
>
</View>
```

### Touchable components

- TouchableHighlight
- TouchableOpacity
