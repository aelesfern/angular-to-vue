export default {
    bind(el, binding) {
        el.style.border = `${binding.value.px}px ${binding.value.borderStyle} green`;
        el.style['border-radius'] = '20px';
    }
}