export default function Header() {
  const list = ["home", "technologies", "projects", "about", "contact"];
  const create_li = () => {
    return list.map((item) => (
      <li class=" duration-200" key={item}>
        <a href={`#${item.toLowerCase()}`}>{item}</a>
      </li>
    ));
  };

  return (
    <header class="fixed top-3 left-0 w-full z-10 flex justify-center p-2 text-xs">
      <div
        class="p-4 backdrop-blur-xs bg-white/30
 rounded-full"
      >
        <ul class="flex space-x-8 ">{create_li()}</ul>
      </div>
    </header>
  );
}
