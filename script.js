const calculate = document.getElementById('calculate');
calculate.addEventListener('click', () =>{
    const income = getInputValue('income');
    const software = getInputValue('software');
    const courses = getInputValue('courses');
    const internet = getInputValue('internet');

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;
    

    const totalExpensesEl = document.getElementById('total-expenses');
    totalExpensesEl.innerText = totalExpenses;

    const balanceEl = document.getElementById('balance');
    balanceEl.innerText = balance;

    const results = document.getElementById('results');
    results.classList.remove('hidden')
})


const calculateSavings = document.getElementById('calculate-savings');
calculateSavings.addEventListener('click', () =>{
    const income = getInputValue('income');
    const software = getInputValue('software');
    const courses = getInputValue('courses');
    const internet = getInputValue('internet');
    const savings = getInputValue('savings');

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const savingsValue = balance * savings / 100;
    const remainingBalance = balance - savingsValue;

    const savingsEl = document.getElementById('savings-amount');
    savingsEl.innerText = savingsValue;

    const remainingBalanceEl = document.getElementById('remaining-balance');
    remainingBalanceEl.innerText = remainingBalance;

})