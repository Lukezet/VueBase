export default {
    root: {
        class: [
            // Space
            'p-5',
            'shadow shadow-xl',
            // Shape
            'rounded-3xl',

            // Color
            'bg-gradient-to-r from-purple-400 to-violet-50',
            'text-white/80',
        ]
    },
    wrapper: {
        class: ['overflow-auto']
    },
    container: {
        class: [
            // Spacing
            'm-0 p-0',

            // Misc
            'list-none overflow-auto'
        ]
    },
    node: {
        class: ['p-1', 'rounded-3xl', 'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-inset focus:ring-primary-400/50 dark:focus:ring-lime-300/50']
    },
    content: ({ context, props }) => ({
        class: [
            // Flex and Alignment
            'flex items-center',

            // Shape
            'rounded-3xl',

            // Spacing
            'p-2',

            // Colors
            'text-white ',
            { 'bg-purple-400 text-white shadow shadow-xl': context.selected },

            // States
            { 'hover:bg-purple-200/40': (props.selectionMode == 'single' || props.selectionMode == 'multiple') && !context.selected },

            // Transition
            'transition-shadow duration-200',

            { 'cursor-pointer select-none': props.selectionMode == 'single' || props.selectionMode == 'multiple' }
        ]
    }),
    toggler: ({ context }) => ({
        class: [
            // Flex and Alignment
            'inline-flex items-center justify-center',

            // Shape
            'border-0 rounded-full',

            // Size
            'w-8 h-8',

            // Spacing
            'mr-2',

            // Colors
            'bg-transparent',
            {
                'text-white': !context.selected,
                'text-white': context.selected,
                invisible: context.leaf
            },

            // States
            'hover:bg-surface-500/20',
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-lime-300/90',

            // Transition
            'transition duration-200',

            // Misc
            'cursor-pointer select-none'
        ]
    }),
    nodeCheckbox: ({ props, context, instance }) => ({
        root: {
            class: [
                'relative',

                // Alignment
                'inline-flex',
                'align-bottom',

                // Size
                'w-6',
                'h-6',

                // Spacing
                'mr-2',

                // Misc
                'cursor-pointer',
                'select-none'
            ]
        },
        box: {
            class: [
                // Alignment
                'flex',
                'items-center',
                'justify-center',

                // Size
                'w-6',
                'h-6',

                // Shape
                'rounded-md',
                'border-2',

                // Colors
                {
                    'border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900': !context.checked,
                    'border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400': context.checked
                },

                // States
                {
                    'peer-hover:border-primary-500 dark:peer-hover:border-primary-400': !props.disabled && !context.checked,
                    'peer-hover:bg-primary-600 dark:peer-hover:bg-primary-300 peer-hover:border-primary-700 dark:peer-hover:border-primary-300': !props.disabled && context.checked,
                    'peer-focus-visible:border-primary-500 dark:peer-focus-visible:border-primary-400 peer-focus-visible:ring-2 peer-focus-visible:ring-primary-400/20 dark:peer-focus-visible:ring-primary-300/20': !props.disabled,
                    'cursor-default opacity-60': props.disabled
                },

                // Transitions
                'transition-colors',
                'duration-200'
            ]
        },
        input: {
            class: [
                'peer',

                // Size
                'w-full ',
                'h-full',

                // Position
                'absolute',
                'top-0 left-0',
                'z-10',

                // Spacing
                'p-0',
                'm-0',

                // Shape
                'opacity-0',
                'rounded-md',
                'outline-none',
                'border-2 border-surface-200 dark:border-surface-700',

                // Misc
                'appearance-none',
                'cursor-pointer'
            ]
        },
        icon: {
            class: [
                // Font
                'text-base leading-none',

                // Size
                'w-4',
                'h-4',

                // Colors
                {
                    'text-white dark:text-surface-900': !instance.partialChecked,
                    'text-gray dark:text-white': instance.partialChecked
                },

                // Transitions
                'transition-all',
                'duration-200'
            ]
        }
    }),
    nodeicon: {
        class: [
            // Space
            'mr-2',

            // Color
            'text-surface-600 dark:text-white/70'
        ]
    },
    subgroup: {
        class: ['m-0 list-none p-0 pl-2 mt-1']
    },
    filtercontainer: {
        class: [
            'relative block',

            // Space
            'mb-2',

            // Size
            'w-full'
        ]
    },
    input: {
        class: [
            'relative',
            // Font
            'font-sans leading-none',

            // Spacing
            'm-0',
            'p-3 pr-10',

            // Size
            'w-full',

            // Shape
            'rounded-3xl',

            // Colors
            'text-surface-600',
            'placeholder:text-surface-400 dark:placeholder:text-surface-600',
            'bg-white',
            'border-2 border-purple-200',

            // States
            'hover:border-purple-400',
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-purple-500',

            // Transition & Misc
            'appearance-none',
            'transition-colors duration-200'
        ]
    },
    loadingicon: {
        class: ['text-surface-500 dark:text-surface-0/70', 'absolute top-[50%] right-[50%] -mt-2 -mr-2 animate-spin']
    },
    searchicon: {
        class: [
            // Position
            'absolute top-1/2 -mt-2 right-3',

            // Color
            'text-surface-600'
        ]
    }
};
