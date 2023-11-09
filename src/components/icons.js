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

export const trashIcon = () => {

  let trashBtn = document.createElement('ion-icon');
  trashBtn.setAttribute('name', 'trash-outline');
  trashBtn.setAttribute('id', 'trash-btn');

  return trashBtn;
}

export const downChevron = () => {

  let downChevron = document.createElement('ion-icon');
  downChevron.setAttribute('name', 'chevron-down-outline');
  downChevron.setAttribute('id', 'down-chevron');
  downChevron.setAttribute('class', 'down-chevron');

  return downChevron;
}
