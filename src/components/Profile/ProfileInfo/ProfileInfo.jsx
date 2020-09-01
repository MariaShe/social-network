import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
      <div>
        <div>
          <img className={classes.content_img} src="https://images.squarespace-cdn.com/content/v1/595a7bb3b8a79b6569459e6e/1499279557299-VCRF8YL4QKARZ2BB96EH/ke17ZwdGBToddI8pDm48kI4QF8RGIFmbZ46RQC1ABx4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dupWXZCjBxO6Eru8y-V_lzzf-uIPxaMxmNnxNu5fcG-P7zs2yPjc1ECvpa5Zm_kMqw/globalSunsetBanner_1600_300.jpg?format=2500w"></img>
        </div>
        <div className={classes.descriptionBlock}>
          ava+description
        </div>
      </div>
    );
}

export default ProfileInfo;