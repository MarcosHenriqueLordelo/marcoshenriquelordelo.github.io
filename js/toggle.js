function toggle() {
  const toggle = document.getElementById("toggle");
  toggle.classList.toggle("active");

  const container = document.getElementById("container");
  container.classList.toggle("active");

  const navigation = document.getElementById("navigation");
  navigation.classList.toggle("active");
}
