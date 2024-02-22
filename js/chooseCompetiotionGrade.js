const competitionName = document.getElementById('competition-name');
const gradeSelect = document.getElementById('grade');

const gradeByCompetition = {
    "Математически турнир \"Иван Салабашев\"": [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"
    ],
    "Коледно математическо състезание": [
        "1", "2", "3", "4", "5", "6", "7"
    ]
}

const gradeNames = {
    "1": "I клас",
    "2": "II клас",
    "3": "III клас",
    "4": "IV клас",
    "5": "V клас",
    "6": "VI клас",
    "7": "VII клас",
    "8": "VIII клас",
    "9": "IX клас",
    "10": "X клас",
    "11": "XI клас",
    "12": "XII клас"
}

competitionName.addEventListener('change', function () {
    const selectedGrade = competitionName.value;
    gradeSelect.innerHTML = '<option value="">Изберете клас на участника</option>';

    if (selectedGrade && gradeByCompetition[selectedGrade]) {
        gradeByCompetition[selectedGrade].forEach(gradeValue => {
            const option = document.createElement('option');
            option.value = gradeValue;
            option.textContent = gradeNames[gradeValue];
            gradeSelect.appendChild(option);
        });
    }
});
