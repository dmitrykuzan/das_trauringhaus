import datepicker from "js-datepicker";

export const calendar = () => {
  const calendarSelector = document.querySelector(".calendar");

  if (!calendarSelector) {
    return;
  }

  datepicker(calendarSelector, {
    // customDays: ["PN", "VT", "SR", "Чт", "Пт", "Сб", "Сб"],
    // customMonths: [
    //   "Январь",
    //   "Февраль",
    //   "Март",
    //   "Апрель",
    //   "Май",
    //   "Июнь",
    //   "Июль",
    //   "Август",
    //   "Сентябрь",
    //   "Октябрь",
    //   "Ноябрь",
    //   "Декабрь",
    // ],
    formatter: (input, date, instance) => {
      const value = date.toLocaleDateString();
      input.value = value; // => '1/1/2099'
    },
  });
};
