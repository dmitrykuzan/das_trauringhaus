import datepicker from "js-datepicker";

export const calendar = () => {
  const calendarSelector = document.querySelector(".calendar");

  if (!calendarSelector) {
    return;
  }

  datepicker(calendarSelector, {
    formatter: (input, date, instance) => {
      const value = date.toLocaleDateString();
      input.value = value; // => '1/1/2099'
    },
  });
};
