export default {
  template: `
    <div style="display: flex; flex-direction: column; margin: 10px 20px; padding: 15px; border: 1px solid black; border-radius 5px;">
      <div class="content">
        <slot name="content"></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  `
};
  