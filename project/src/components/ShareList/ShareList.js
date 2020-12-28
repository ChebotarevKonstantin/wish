import React from 'react';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import style from './ShareList.module.css'

export default function ShareList({ id, user, title }) {
  const [state, setState] = useState({ value: `${window.location.hostname}/share/${id && id}/${user && user}`, copied: false })

  return (
    <CopyToClipboard text={state.value}
      onCopy={() => setState({ copied: true })}
      title={`Скопировать ссылку на список: ${title}`}>

      <button className={style.button} onClick={() => alert('Ссылка скоприрована в буфер обмена')}>{<i class="fas fa-external-link-alt"></i>}</button>
    </CopyToClipboard>
  )
}
