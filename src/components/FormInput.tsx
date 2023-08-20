import {
  forwardRef,
  HTMLInputTypeAttribute,
  LegacyRef,
  ReactElement,
} from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";

interface FormInputType {
  id: string;
  type?: HTMLInputTypeAttribute;
  label?: string;
}

const FormInput = forwardRef(
  (
    { id, type, label, ...rest }: FormInputType & InputProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    const { control } = useFormContext();
    return (
      <Controller
        name={id}
        control={control}
        render={({ field, fieldState }) => (
          <FormControl isInvalid={Boolean(fieldState.error)}>
            {label && (
              <Flex alignItems="center" justifyContent="space-between">
                <Flex alignItems="center">
                  <FormLabel
                    htmlFor={id}
                    id={`${id}:label`}
                    mr="1.5"
                    color="gray.700"
                    fontWeight="500"
                  >
                    {label}
                  </FormLabel>
                </Flex>
              </Flex>
            )}
            <Input
              {...field}
              {...rest}
              ref={ref}
              aria-label={id}
              id={id}
              data-peer
              min={0}
            />

            {fieldState.error && (
              <FormErrorMessage>{fieldState.error.message}</FormErrorMessage>
            )}
          </FormControl>
        )}
      />
    );
  }
);

FormInput.displayName = "FormInput";

export default FormInput;
