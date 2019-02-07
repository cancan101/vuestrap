<template>
    <div ref="editor"></div>
</template>

<script>
    import Quill from "quill";

    export default {
        name: 'InputQuill',
        props: {
            value: {
                type: String,
                default: ''
            }
        },

        data() {
            return {
                editor: null
            };
        },
        mounted() {
            this.InputQuill = new Quill(this.$refs.editor, {
                modules: {
                    toolbar: [
                        [{ header: [1, 2, 3, 4, false] }],
                        ['bold', 'italic', 'underline']
                    ]
                },
                theme: 'snow',
                //formats: ['bold', 'underline', 'header', 'italic']
            });

            this.InputQuill.root.innerHTML = this.value;

            this.InputQuill.on('text-change', () => this.update());
        },

        methods: {
            update() {
                this.$emit('input', this.InputQuill.getText() ? this.InputQuill.root.innerHTML : '');
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    /*@import "~quill/dist/quill.core.css";*/
    @import "~quill/dist/quill.snow.css";
</style>
