import { CheckboxFieldFormElement } from "@/components/fields/checkbox-field";
import { DateFieldFormElement } from "@/components/fields/date-field";
import { NumberFieldFormElement } from "@/components/fields/number-field";
import { ParagprahFieldFormElement } from "@/components/fields/paragraph-field";
import { SelectFieldFormElement } from "@/components/fields/select-field";
import { SeparatorFieldFormElement } from "@/components/fields/separator-field";
import { SpacerFieldFormElement } from "@/components/fields/spacer-field";
import { SubTitleFieldFormElement } from "@/components/fields/subtitle-field";
import { TextAreaFormElement } from "@/components/fields/textarea-field";
import { TextFieldFormElement } from "@/components/fields/text-field";
import { TitleFieldFormElement } from "@/components/fields/title-field";

export type ElementsType =
    | "TextField"
    | "TitleField"
    | "SubTitleField"
    | "ParagraphField"
    | "SeparatorField"
    | "SpacerField"
    | "NumberField"
    | "TextAreaField"
    | "DateField"
    | "SelectField"
    | "CheckboxField";

export type SubmitFunction = (key: string, value: string) => void;

export type FormElement = {
    type: ElementsType;

    construct: (id: string) => FormElementInstance;

    designerButtonElement: {
        icon: React.ElementType;
        label: string;
    };

    designerComponent: React.FC<{
        elementInstance: FormElementInstance;
    }>;
    formComponent: React.FC<{
        elementInstance: FormElementInstance;
        submitValue?: SubmitFunction;
        isInvalid?: boolean;
        defaultValue?: string;
    }>;
    propertiesComponent: React.FC<{
        elementInstance: FormElementInstance;
    }>;

    validate: (formElement: FormElementInstance, currentValue: string) => boolean;
};

export type FormElementInstance = {
    id: string;
    type: ElementsType;
    extraAttributes?: Record<string, any>;
};

type FormElementsType = {
    [key in ElementsType]: FormElement;
};
export const FormElements: FormElementsType = {
    TextField: TextFieldFormElement,
    TitleField: TitleFieldFormElement,
    SubTitleField: SubTitleFieldFormElement,
    ParagraphField: ParagprahFieldFormElement,
    SeparatorField: SeparatorFieldFormElement,
    SpacerField: SpacerFieldFormElement,
    NumberField: NumberFieldFormElement,
    TextAreaField: TextAreaFormElement,
    DateField: DateFieldFormElement,
    SelectField: SelectFieldFormElement,
    CheckboxField: CheckboxFieldFormElement,
};
