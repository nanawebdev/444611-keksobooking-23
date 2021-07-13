const userAvatarChooser = document.querySelector('.ad-form__field input[type=file]');
const headerPhotoContainer = document.querySelector('.ad-form-header__preview');
const userPhotoPreview = headerPhotoContainer.querySelector('img');

const housePhotoChooser = document.querySelector('.ad-form__upload input[type=file]');
const housePhotoContainer = document.querySelector('.ad-form__photo');

const ACCEPT_TYPES = ['jpg', 'jpeg', 'png', 'gif'];

const uploadPhoto = (fileChooser, previewWrapper) => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = ACCEPT_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      previewWrapper.src = reader.result;
    });
    reader.readAsDataURL(file);
  }
};

userAvatarChooser.addEventListener('change', () => {
  uploadPhoto(userAvatarChooser, userPhotoPreview);
});


housePhotoChooser.addEventListener('change', () => {
  const photoElement = document.createElement('img');
  photoElement.style.width = '70px';
  photoElement.style.height = '70px';
  housePhotoContainer.appendChild(photoElement);

  uploadPhoto(housePhotoChooser, photoElement);
});
