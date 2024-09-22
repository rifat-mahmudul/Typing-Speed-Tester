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

//history Tab Button
const historyTab = document.getElementById('history-tab');
historyTab.addEventListener('click', () =>{

    historyTab.classList.add(
        'text-white',
        'font-semibold',
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600'
    );

    const assistantTab = document.getElementById('assistant-tab');
    assistantTab.classList.remove(
        'text-white',
        'font-semibold',
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600'
    );

    const expenseForm = document.getElementById('expense-form');
    expenseForm.classList.add('hidden');

});

//assistant Tab Button
const assistantTab = document.getElementById('assistant-tab');
assistantTab.addEventListener('click', () =>{

    const historyTab = document.getElementById('history-tab');
    historyTab.classList.remove(
        'text-white',
        'font-semibold',
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600'
    );

    const assistantTab = document.getElementById('assistant-tab');
    assistantTab.classList.add(
        'text-white',
        'font-semibold',
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600'
    );

    const expenseForm = document.getElementById('expense-form');
    expenseForm.classList.remove('hidden');

});