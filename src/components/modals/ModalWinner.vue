<template>
    <el-dialog title="Outer Dialog" :visible="true">
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="innerVisible = true">open the inner Dialog</el-button>
        </div>
    </el-dialog>
</template>
<script>
import {EventBus} from '@/plugins/EventBus.js'
import ViewInvoice from './invoice/ViewInvoice.vue'

export default {
    name: "ModalWinner",
    props: {
        infoModal: Object,
        visibility: Boolean
    },
    data() {
        return {
            context: this.infoModal,
        };
    },
    computed: {
    },
    methods: {
    }
}
</script>

<style>

</style>

