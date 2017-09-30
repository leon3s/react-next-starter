const set = (name, value) => {
  const cookie = `${name}=${value};`;
  // `domain=.faste.ai`;
  document.cookie = cookie;
};

const get = (cname) => {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');

  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
  }
  return null;
};

const del = (name) => {
  const cookie = `${name}=;expires=-1;domain=.faste.ai`;
  document.cookie = cookie;
};

export default {
  get,
  del,
  set,
};
