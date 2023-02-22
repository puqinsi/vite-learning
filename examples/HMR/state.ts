let timer: number;
const hot = import.meta.hot;
if (hot) {
  // 初始化 count
  if (!hot.data.count) {
    hot.data.count = 0;
  }

  hot.dispose(() => {
    if (timer) {
      clearInterval(timer);
    }
  });
}

export function initState() {
  timer = setInterval(() => {
    let countEle = document.getElementById("count")!;
    countEle.innerText = getCount() + "";
  }, 1000);
}

function getCount() {
  const data = hot?.data || { count: 0 };
  data.count = ++data.count;
  return data.count;
}
