export interface Theme {
  [key: string]: {
    colors: {
      [key: string]: {
        [key: string]: string;
      };
    };
    size: {
      [key: string]: string;
    };
    background: {
      [key: string]: string;
    };
    border_colors: {
      [key: string]: string;
    };
    font_colors: {
      [key: string]:
        | string
        | {
            [key: string]: string;
          };
    };
    font_size: {
      [key: string]: string;
    };
    line_height: {
      [key: string]: string;
    };
  };
}
