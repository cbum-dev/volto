import Icon from '../Icon/Icon';
import type { IconPropsWithoutChildren } from '../Icon/Icon';

const World = (props: IconPropsWithoutChildren) => {
  return (
    <Icon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM9.38254 19.562C8.93442 18.5917 8.57343 17.3767 8.33284 16H5.07026C6.02529 17.651 7.55338 18.929 9.38254 19.562ZM11.0285 18.3283C10.7671 17.6747 10.5403 16.8885 10.3667 16H13.6333C13.4597 16.8885 13.2329 17.6747 12.9715 18.3283C12.6653 19.0937 12.3508 19.5788 12.1039 19.8399C12.0635 19.8826 12.0289 19.9155 12 19.9407C11.9711 19.9155 11.9365 19.8826 11.8961 19.8399C11.6492 19.5788 11.3347 19.0937 11.0285 18.3283ZM10 12C10 12.6936 10.0306 13.3627 10.0872 14H13.9128C13.9694 13.3627 14 12.6936 14 12C14 11.3064 13.9694 10.6373 13.9128 10H10.0872C10.0306 10.6373 10 11.3064 10 12ZM8.08002 10C8.02754 10.6462 8 11.3151 8 12C8 12.6849 8.02754 13.3538 8.08002 14H4.25204C4.08751 13.3608 4 12.6906 4 12C4 11.3094 4.08751 10.6392 4.25204 10H8.08002ZM10.3667 8H13.6333C13.4597 7.11152 13.2329 6.32531 12.9715 5.67171C12.6653 4.90634 12.3508 4.42118 12.1039 4.16007C12.0635 4.11741 12.0289 4.08451 12 4.05929C11.9711 4.08451 11.9365 4.11741 11.8961 4.16007C11.6492 4.42118 11.3347 4.90634 11.0285 5.67171C10.7671 6.32531 10.5403 7.11152 10.3667 8ZM15.92 10C15.9725 10.6462 16 11.3151 16 12C16 12.6849 15.9725 13.3538 15.92 14H19.748C19.9125 13.3608 20 12.6906 20 12C20 11.3094 19.9125 10.6392 19.748 10H15.92ZM18.9297 8H15.6672C15.4266 6.62334 15.0656 5.40828 14.6175 4.43801C16.4466 5.07104 17.9747 6.34903 18.9297 8ZM8.33284 8H5.07026C6.02529 6.34903 7.55338 5.07104 9.38254 4.438C8.93442 5.40828 8.57343 6.62334 8.33284 8ZM14.6175 19.562C15.0656 18.5917 15.4266 17.3767 15.6672 16H18.9297C17.9747 17.651 16.4466 18.929 14.6175 19.562Z"
          clipRule="evenodd"
        />
      </svg>
    </Icon>
  );
};

export default World;
