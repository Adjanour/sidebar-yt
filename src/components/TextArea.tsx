// // import React, { useState, ChangeEvent, forwardRef } from 'react';


// // export const TextArea = forwardRef({props},ref) => {
// //   const [text, setText] = useState(''); // State to manage the text in the text area

// //   const handleTextChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
// //     setText(event.target.value);
// //   };

// //   return (
// //     <div>
// //       <textarea
// //         cols={40} rows={5}
// //         placeholder="Enter your text here"
// //         className={props.className}
// //       />
// //       <h6>Character Count: {text.length}</h6>
// //     </div>
// //   );
// // }

// // export default TextArea;
// // import React, { useState, forwardRef, useEffect } from 'react';
// // import { UseControllerProps, FieldName } from 'react-hook-form';

// // export interface TextAreaProps extends UseControllerProps {
// //   name: FieldName;
// // }

// // const TextArea: React.FC<TextAreaProps> = forwardRef((props, ref) => {
// //   const [text, setText] = useState('');

// //   useEffect(() => {
// //     setText(props.field.value);
// //   }, [props.field.value]);

// //   const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
// //     setText(event.target.value);
// //     props.field.onChange(event.target.value);
// //   };

// //   return (
// //     <textarea
// //       {...props.field}
// //       value={text}
// //       onChange={handleChange}
// //       ref={ref}
// //     />
// //   );
// // });

// // export default TextArea;


// // import React, { forwardRef, useState, useEffect } from 'react';
// // import { FieldValues, FieldName, UseControllerProps,useController } from 'react-hook-form';

// // export interface Props extends UseControllerProps {
  
// // }

// // export const TextArea: React.FC<Props> = forwardRef<HTMLTextAreaElement,Props>((props, ref) => {
// //   const [text, setText] = useState(''); // State to manage the text in the text area

// //   const { field } = useController(props);

// //   useEffect(() => {
// //     setText(field.value);
// //   }, [field.value]);

// //   const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
// //     setText(event.target.value);
// //     field.onChange(event.target.value);
// //   };

// //   return (
// //     <textarea
// //       {...field}
// //       value={text}
// //       onChange={handleChange}
// //       ref={ref}
// //     />
// //   );
// // });


// // import React, { forwardRef, ForwardedRef,useState,useEffect } from 'react';


// // interface TextAreaProps {
// //   // Define your custom component's props here
// //   className:string;
// // }

// // const TextArea: React.ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = (
// //   { className, ...rest },
// //   ref
// // ) => {

// //   const [text, setText] = useState('');

// //   const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
// //     setText(event.target.value);
// //   };

// //   return (
// //     <div>
// //      <textarea
// //      ref={ref} 
// //      {...rest}
// //          cols={40} rows={5}
// //         placeholder="Enter your text here"
// //         className={className}       />
// //      <h6>Character Count: {text.length}</h6>
// //     </div>
// //   );
// // };

// // export default forwardRef<HTMLTextAreaElement, TextAreaProps> (TextArea);

// // import React, { forwardRef } from 'react';
// // import { UseFormRegister, FieldValues } from 'react-hook-form';




// // interface TextAreaProps {
// //   label: string;
// //   name: string;
// //   register: UseFormRegister<FieldValues>;
// // }

// // const TextArea: React.FC<TextAreaProps> = forwardRef<HTMLTextAreaElement, TextAreaProps>(
// //   ({ label, name, register }, ref) => {
// //     return (
// //       <div>
// //         <label htmlFor={name}>{label}</label>
// //         <textarea id={name}  {...register(name)} />
// //       </div>
// //     );
// //   }
// // );

// // export default TextArea;


// import React, { ChangeEvent, TextareaHTMLAttributes, forwardRef } from 'react';

// interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
//   cols: number;
//   rows: number;
// }

// const TextArea:TextAreaProps = forwardRef<TextAreaProps>({cols,rows},ref) => {
//   return (
//     <textarea
//       cols={cols}
//       rows={rows}
//       {...rest}
//     />
//   );
// };

// export default TextArea;

import React ,{useState,ChangeEvent}from "react";

type Props = {
className: string;
cols: number;
rows: number;
};

export const TextArea = React.forwardRef<HTMLTextAreaElement,Props>((props,ref) => {
  return (
    <textarea ref={ref} {...props}  />
  )
});

TextArea.displayName = "TextArea"