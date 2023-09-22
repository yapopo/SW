import React from 'react';

let styles = {
  wrapper : {
    display : 'flex',
    justifyContent : 'space-between',
    alignItems : 'center',
    border : '2px solid #ddd',
    borderRadius : '20px',
    padding : '0 20px'
  },

  img : {
    width : '80px',
    height : '80px',
    borderRadius : '50%'
  },

  contentBox : {
    flexGrow : 1,
    marginLeft : '16px'
  },

  button : {
    height : '20px'
  }
}

const Comment = (props) => {
  return (
    <div style={styles.wrapper}>

        <div>
          <img src="https://www.pngmart.com/files/23/User-PNG-Isolated-Image.png" alt="userImg" style={styles.img}/>
        </div>

        <div style={styles.contentBox}>
          <h3>{props.name}</h3>
          <p>{props.text}</p>
        </div>

      <button type='button' style={styles.button} onClick={props.delete}>X</button>
    </div>
  );
};

export default Comment;