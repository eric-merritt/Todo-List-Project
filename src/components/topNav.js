import './topNav.css';

export const topNav = () => {
  const nav = document.createElement('nav');
    nav.classList.add('top-nav');
    nav.innerHTML = `<ul>
      <li><a href="/">Home</a></li>
      <li><a href="/profile">Profile</a></li>
      <li><a href="/about">About</a></li>
      </ul>`;
  return nav;
}