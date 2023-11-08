export const closeIcon = () => {

  let closeBtn = document.createElement('ion-icon');
  closeBtn.setAttribute('name', 'close-outline');
  closeBtn.setAttribute('id', 'close-btn');

  return closeBtn;
}


export const addIcon = () => {
  
  let addBtn = document.createElement('ion-icon');
  addBtn.setAttribute('name', 'add-outline');
  addBtn.setAttribute('id', 'add-btn');

  return addBtn;
}

export const removeIcon = () => {
    
  let removeBtn = document.createElement('ion-icon');
  removeBtn.setAttribute('name', 'remove-outline');
  removeBtn.setAttribute('id', 'remove-btn');

  return removeBtn;
}