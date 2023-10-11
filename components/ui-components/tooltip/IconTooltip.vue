<template>
    <div class="d-flex gap-3 justify-center">
        <v-avatar size="35">
            <v-btn class="rounded-circle" color="primary" flat>

                <v-icon>mdi-account</v-icon>
                <v-tooltip activator="parent" location="start">
                    primary
                </v-tooltip>
            </v-btn>
        </v-avatar>
        <v-avatar size="35">
            <v-btn class="rounded-circle" color="secondary" flat>
                <HeartIcon color="white" size="22" />
                <v-icon color="white">mdi-heart</v-icon>
                <v-tooltip activator="parent" location="top">
                    secondary
                </v-tooltip>
            </v-btn>
        </v-avatar>
        <v-avatar size="35">
            <v-btn class="rounded-circle" color="warning" flat>

                <v-icon color="white">mdi-emoticon-happy-outline</v-icon>
                <v-tooltip activator="parent" location="end">
                    warning
                </v-tooltip>
            </v-btn>
        </v-avatar>
        <v-avatar size="35">
            <v-btn class="rounded-circle" color="error" flat>
                <HeartIcon size="22" />
                <v-tooltip activator="parent" location="bottom">
                    error
                </v-tooltip>
            </v-btn>
        </v-avatar>
    </div>
</template>
