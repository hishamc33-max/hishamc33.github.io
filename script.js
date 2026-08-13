const output = "hisham-c — devops engineer & cloud engineer";
const typedEl = document.getElementById('typed');
let i = 0;
function type(){
  if(i <= output.length){
    typedEl.textContent = output.slice(0, i);
    i++;
    setTimeout(type, 28);
  } else {
    renderIdentity();
  }
}
function renderIdentity(){
  const term = document.querySelector('.term-body');
  const name = document.createElement('div');
  name.className = 'out-name';
  name.textContent = 'Hisham C';
  const role = document.createElement('div');
  role.className = 'out-role';
  role.textContent = 'DevOps Engineer · Cloud Engineer · Linux Administration';
  const summary = document.createElement('div');
  summary.className = 'out-summary';
  summary.textContent = 'Linux (RHEL 9), AWS, and CI/CD automation with Jenkins, Docker, Ansible, and Terraform — cutting deployment time 60% and provisioning time 50% in production.';
  term.appendChild(name);
  term.appendChild(role);
  term.appendChild(summary);
}
type();

const start = Date.now();
const uptimeEl = document.getElementById('uptime');
setInterval(() => {
  const s = Math.floor((Date.now() - start)/1000);
  const m = Math.floor(s/60);
  const sec = s % 60;
  uptimeEl.textContent = `uptime: ${m}m ${sec}s`;
}, 1000);
