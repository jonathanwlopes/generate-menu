export const Element = ({ tag, ...props }) => {
  if (!tag)
    return console.error(
      "Erro: Envie uma TAG para executar a função: 'createElement'"
    );

  const _element = document.createElement(tag);

  if (props.textContent) {
    _element.textContent = props.textContent;
  }

  if (props.href) {
    _element.href = props.href;
  }

  if(props.classList){
    _element.classList.add(...props.classList)
  }

  return _element;
};
