<template>
  <div
      :style="dynamicStyles"
      :class="[classes.root, ...cssClasses]"
      v-html="content"
      role="presentation"
      data-element="text"
  />
</template>

<script>
export default {
  name: 'Text',
  props: {
    classes: {
      type: Object,
      default: () => ({}),
    },
    content: {
      type: String,
      default: '',
    },
    textAlign: {
      type: String,
      default: '',
    },
    border: {
      type: String,
      default: '',
    },
    borderColor: {
      type: String,
      default: '',
    },
    borderWidth: {
      type: String,
      default: '',
    },
    borderRadius: {
      type: String,
      default: '',
    },
    marginTop: {
      type: String,
      default: '',
    },
    marginRight: {
      type: String,
      default: '',
    },
    marginBottom: {
      type: String,
      default: '',
    },
    marginLeft: {
      type: String,
      default: '',
    },
    paddingTop: {
      type: String,
      default: '',
    },
    paddingRight: {
      type: String,
      default: '',
    },
    paddingBottom: {
      type: String,
      default: '',
    },
    paddingLeft: {
      type: String,
      default: '',
    },
    cssClasses: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const classes = ''; // [...defaultClasses, ...props.classes];

    const dynamicStyles = {
      textAlign: props.textAlign,
      border: props.border,
      borderColor: props.borderColor,
      borderWidth: props.borderWidth,
      borderRadius: props.borderRadius,
      marginTop: props.marginTop,
      marginRight: props.marginRight,
      marginBottom: props.marginBottom,
      marginLeft: props.marginLeft,
      paddingTop: props.paddingTop,
      paddingRight: props.paddingRight,
      paddingBottom: props.paddingBottom,
      paddingLeft: props.paddingLeft,
    };

    return {
      classes,
      dynamicStyles,
      content: props.content,
      cssClasses: props.cssClasses
    };
  },
};
</script>

<style scoped>
</style>
