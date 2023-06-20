new Vue({
    el: '#app',
    data: {
        selectedEntity: null,
        toggleBoxes: {
            CoreCourses: false,
            'CMPSC 400': false,
            'CMPSC 600': false,
            'CMPSC 800': false,
            CMPSC200: false
        }
    },
    methods: {
        toggleEntity(entity) {
            this.selectedEntity = entity;
        },
        isEntitySelected(entity) {
            return this.selectedEntity === entity;
        },
        toggleBox(box) {
            this.toggleBoxes[box] = !this.toggleBoxes[box];
        },
        showBox(box) {
            return this.toggleBoxes[box];
        }
    }
});
