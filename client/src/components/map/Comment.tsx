import React, { useState, useRef, memo } from 'react';
import { useDispatch } from 'react-redux';
import { changeComment } from '../../actions/changeComment';
import { deleteComment } from '../../actions/deleteComment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

interface Comment {
  comment: string;
  id: string;
  index: number;
}

function Comment({ comment, id, index }: Comment): JSX.Element {
  const dispatch = useDispatch();
  const [text, updateText] = useState<string>(comment);
  const [focus, toggleFocus] = useState<boolean>(false);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = (): void => {
    if (!text.length || comment === text) return;
    dispatch(changeComment(text, id, index));
  };

  const handleFocus = (): void => {
    toggleFocus(!focus);
  };

  const handleDelete = (): void => {
    dispatch(deleteComment(id, index));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const textareaRef = useRef<HTMLDivElement>(null);
  return (
    <li className='comments-row__list-item'>
      <div
        suppressContentEditableWarning={true}
        ref={textareaRef}
        contentEditable
        onInput={(e) => {
          const text = e.currentTarget.innerText;
          updateText(text);
        }}
        onKeyDown={(e) => {
          if (
            e.currentTarget.innerHTML.length > 130 &&
            e.key !== 'Backspace' &&
            e.key !== 'Enter'
          ) {
            e.preventDefault();
            return;
          }
        }}
        className='comments-row__comments-textarea'
        onFocus={() => {
          handleFocus();
        }}
        onBlur={(e) => {
          handleFocus();
          handleSubmit();
        }}
        onKeyPress={(e) => {
          handleKeyPress(e);
        }}
        defaultValue={comment}
      >
        {comment}
      </div>
      <button
        ref={buttonRef}
        className={`comments-row__comment-action-button ${
          focus ? 'focus' : ''
        }`}
        type='submit'
        onClick={handleDelete}
      >
        <FontAwesomeIcon
          className='comments-row__font-awesome-trash'
          icon={faTrashAlt}
        />
      </button>
    </li>
  );
}

export default memo(Comment);
