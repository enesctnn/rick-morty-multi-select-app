import { motion } from 'framer-motion';

function DropDown() {
  return (
    <motion.ul
      id="dropdown"
      initial={{ height: 0 }}
      animate={{ height: 330 }}
      exit={{ height: 0 }}
      className="border-custom-100 w-full overflow-hidden rounded-lg border bg-white p-2"
    >
      <li>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde
        rerum labore veritatis quasi nam harum dignissimos debitis, ullam
        deserunt sequi inventore repudiandae delectus amet eaque aut. Enim,
        numquam laboriosam.
      </li>
    </motion.ul>
  );
}

export default DropDown;
