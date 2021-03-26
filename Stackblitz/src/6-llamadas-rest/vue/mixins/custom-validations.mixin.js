export default {
    methods: {
        looksLegit: value => value !== value.toUpperCase() && value.includes(" ")
    }
}