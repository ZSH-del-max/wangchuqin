// 获取页面信息
const cheerBtn=document.getElementById('cheer-btn');
const cheerCountText=document.getElementById('cheer-count');
const countSpan=cheerCountText.querySelector('span');
// 初始化数字
let storedValue = localStorage.getItem('mySavedCount');
let count = storedValue !== null ? Number(storedValue) : 0;
console.log("当前数字是:", count); 
// 更新页面显示
countSpan.textContent=count;
if(count>0){
    cheerCountText.style.display='block';
}
// 点击时触发的功能
cheerBtn.addEventListener('click',function(){
    count++;
    countSpan.textContent=count;
    cheerCountText.style.display='block';
    const originalText=cheerBtn.textContent;
    cheerBtn.textContent="加油！🔥("+count+")";
    setTimeout(()=>{
        cheerBtn.textContent=originalText;
    },3000);

    localStorage.setItem('mySavedCount',count);
})
// 导航栏
document.querySelectorAll('a[href^"#"').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
        const targetId=this.getAttribute('href');
        const targetElement=document.querySelector(targetId);
        if(targetElement)
        {
            targetElement.scrollIntoView({
                behavior:'smooth'
            });
        }
    })
})
// 欢迎
console.log("欢迎来到王楚钦的个人主页！");